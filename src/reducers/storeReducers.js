export const storeReducer = (state, action) => {
    switch (action.type) {
      case "ADD_JOB":
        return {...state, jobs: state.jobs.concat(action.payload) };
      case "DELETE_JOB":
          return{...state, jobs: state.jobs.filter((job) => job.id !== action.payload)};
      default:
        return state;
    }
  };
  