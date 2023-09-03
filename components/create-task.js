import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomModal from "../components/modal";
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from "../utility/utils.js"

const CreateTaskSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Title too short!').max(100, 'Title too long!').required('Required'),
  description: Yup.string().min(10, 'Description should be longer!').max(150, 'Description too long!').required('Required'),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required('Priority is required'),
  startDate: Yup.date().required('Required'),
  endDate: Yup.date().min(Yup.ref('startDate'), 'End Date should not be before Start Date').required('Required'),
  status: Yup.string().oneOf(['todo', 'inProgress', 'done']).required('Status is required'),
  assignedPerson: Yup.string().oneOf(['Person1', 'Person2', 'Person3']).required('Assigned Person is required'),
  attachments: Yup.array().of(Yup.mixed().required('A file is required')),
  subTasks: Yup.array().of(
    Yup.object().shape({
       title: Yup.string().min(3, 'Title too short!').max(100, 'Title too long!'),
       description: Yup.string().min(10, 'Description should be longer!').max(150, 'Description too long!')
    })
  )
});



function CreateTask(props) {

  const [storedValue, setStoredValue] = React.useState(null);

  React.useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    setStoredValue(storedTasks ? JSON.parse(storedTasks) : []);
  }, []);

  return (
    <>
      <CustomModal buttonName={"Create Task"} title={"Create a new task"}>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    priority: '',
                    startDate: '',
                    endDate: '',
                    status: '',
                    assignedPerson: '',
                    attachments: [],
                    subTasks: [],
                }}
                validationSchema={CreateTaskSchema}
                // onSubmit={(values) => {
                //     console.log(values);
                // }}
                onSubmit={(values, { resetForm }) => {
                // Get tasks from localStorage
                    const currentTasks = storedValue;
                
                    // Push the new task
                    currentTasks.push(values);
                
                    // Save tasks back to localStorage
                    saveTasksToLocalStorage(currentTasks);
                
                    // Reset form for the next input
                    resetForm();
                
                    console.log('Task saved successfully!');
                }}
            >
            {({ values, setFieldValue }) => (
                <Form>
                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Title</label>
                        <Field className="w-full" name="title" type="text" />
                        <ErrorMessage name="title" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Description</label>
                        <Field className="w-full border border-black rounded" name="description" type="text" as="textarea" />
                        <ErrorMessage name="description" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Priority</label>
                        <label className='mr-3'>
                        <Field type="radio" name="priority" value="low" />
                            Low
                        </label>
                        <label className='mr-3'>
                        <Field type="radio" name="priority" value="medium" />
                            Medium
                        </label>
                        <label className='mr-3'>
                        <Field type="radio" name="priority" value="high" />
                            High
                        </label>
                        <ErrorMessage name="priority" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Start Date</label>
                        <Field name="startDate" type="date" />
                        <ErrorMessage name="startDate" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>End Date</label>
                        <Field name="endDate" type="date" />
                        <ErrorMessage name="endDate" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Status</label>
                        <Field className="border border-black rounded p-1" as="select" name="status">
                            <option value="" label="Select status" />
                            <option value="todo" label="To-do" />
                            <option value="inProgress" label="In progress" />
                            <option value="done" label="Done" />
                        </Field>
                        <ErrorMessage name="status" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Assigned Person</label>
                        <Field  className="border border-black rounded p-1" as="select" name="assignedPerson">
                            <option value="" label="Select assignee" />
                            {/* Add options for each person. Example: */}
                            <option value="Person1" label="Person 1" />
                            <option value="Person2" label="Person 2" />
                            <option value="Person3" label="Person 3" />
                        </Field>
                        <ErrorMessage name="assignedPerson" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Attachments</label>
                        <Field name="attachments" type="file" multiple onChange={(event) => {
                        setFieldValue("attachments", event.currentTarget.files);
                        }} />
                        <ErrorMessage name="attachments" component="div" />
                    </div>

                    <div>
                        <label className='text-sm font-medium flex flex-col mt-3 mb-3'>Sub-tasks</label>
                        {values.subTasks && values.subTasks.length > 0 ? (
                        values.subTasks.map((subTask, index) => (
                            <div key={index} className='mb-3 flex flex-col'>
                            <Field className="mb-3" name={`subTasks.${index}.title`} placeholder="Sub-task Title" />
                            <Field name={`subTasks.${index}.description`} placeholder="Sub-task Description" />
                            </div>
                        ))
                        ) : null}
                        <button  className="border border-black rounded p-1" type="button" onClick={() => setFieldValue("subTasks", [...values.subTasks, { title: "", description: "" }])}>
                        Add Sub-task
                        </button>
                    </div>

                    <div className='flex justify-end'>
                        <button className='bg-sky-500 p-2 rounded text-white mt-3' type="submit">Create Task</button>
                    </div>
                </Form>
            )}
        </Formik>
      </CustomModal>
    </>
  );
}

export default CreateTask;


// const saveTasksToLocalStorage = (tasks) => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
  
//   const getTasksFromLocalStorage = () => {
//     const storedTasks = localStorage.getItem('tasks');
//     return storedTasks ? JSON.parse(storedTasks) : [];
//   }

//   onSubmit={(values, { resetForm }) => {
//     // Get tasks from localStorage
//     const currentTasks = getTasksFromLocalStorage();
  
//     // Push the new task
//     currentTasks.push(values);
  
//     // Save tasks back to localStorage
//     saveTasksToLocalStorage(currentTasks);
  
//     // Reset form for the next input
//     resetForm();
  
//     console.log('Task saved successfully!');
//   }}
  

