import axios from 'axios';

type myString = string | undefined;
async function getFetchData() {
  //if string not assign undefined add exclamation mark
  const uri: myString =
    'https://api.github.com/repos/muhimron90/react-learn-pratice/contents/';

  try {
    if (uri !== undefined) {
      const response = await axios.get(uri, {
        headers: { Accept: 'application/json' },
      });
      const getData = await response.data;

      return getData;
    } else {
      console.log('uri is undefined');
      process.exit(1);
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.error('Error', error.message);
    }
  }
}
export { getFetchData };
