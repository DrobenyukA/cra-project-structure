const someInternalMethod = () => "Some internal method";

export const someExternalMethodOfSpecificBusinessLogic = () =>
  console.log("Some external method");

export const anotherExternalMethodOfSpecificBusinessLogic = () => {
  console.log("Another external method with " + someInternalMethod());
};

export const BusinessLogicService = {
  some: someExternalMethodOfSpecificBusinessLogic,
  another: anotherExternalMethodOfSpecificBusinessLogic,
};
