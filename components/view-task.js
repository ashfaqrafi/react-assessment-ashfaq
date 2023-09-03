import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomModal from "../components/modal";

function ViewTask(props) {

  return (
    <>
      <CustomModal buttonName={props.title} title="Task Description">
            {props.description}
      </CustomModal>
    </>
  );
}

export default ViewTask;
