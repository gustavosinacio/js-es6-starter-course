const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

const execPromise = async () => {
  const response = await minhaPromise();

  console.log(response);
};

export { execPromise };
