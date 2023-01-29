const FETCH_MISSION = 'spacetravelers/missions/FETCH_MISSION';
const BOOK_MISSION = 'spacetravelers/missions/BOOK_MISSION';
const UNBOOK_MISSION = 'spacetravelers/missions/UNBOOK_MISSION';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.mission;
    case BOOK_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case UNBOOK_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export const fetchMission = (mission) => ({
  type: FETCH_MISSION,
  mission,
});

export const joinMission = (id) => ({
  type: BOOK_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: UNBOOK_MISSION,
  payload: id,
});

export const fetchMissionApi = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsFetched = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch(fetchMission(missionsFetched));
};

export default missionReducer;
