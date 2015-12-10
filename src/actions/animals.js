import { FETCH_ANIMALS_START, FETCH_ANIMALS_DONE, FETCH_ANIMALS } from 'constants/animals';

function fetchAnimalsStart(){
    return {
        type: FETCH_ANIMALS_START
    };
}

function fetchAnimalsDone(data){
    return {
        type: FETCH_ANIMALS_DONE,
        payload: data
    };
}

export default {
  fetchAnimals: function(){
    dispatch(fetchAnimalsStart());
    return (dispatch) => fetch('http://localhost:3020/posts')
            .then((response) => response.json())
            .then((json) =>  dispatch(fetchAnimalsDone(json)))
    };
  }
};
