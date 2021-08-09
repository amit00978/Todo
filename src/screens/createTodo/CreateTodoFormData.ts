const FormData = [
  {
    id: 'title',
    placeHolder: 'Title',
    type: 'input',
  },
  {
    id: 'des',
    placeHolder: 'Description',
    type: 'input',
    inputContainer: {
      height: 150,
      marginBottom: 0,
      marginTop: 0,
    },
    inputStyle: {
      height: 150,
      textAlignVertical: 'top',
    },
    outterStyle: {
      marginTop: 15,
      marginBottom: 15,
    },
    maxLength: 500,
    multiline: true,
  },
];
export {FormData};
