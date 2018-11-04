import {
  GAME_CLEAR,
  GAME_SET_DECK,
  GAME_DRAW_PLAYER,
  GAME_DRAW_DEALER,
  GAME_SET_PROGRESS,
  GAME_SET_SCORE
} from '../constants';

const initialState = {
  deck: {},
  cards: {
    player: [],
    dealer: []
  },
  inProgress: false,
  score: {
    dealer: 0,
    draw: 0,
    player: 0
  },
  lastWiner: null
};

export default function update(state = initialState, action) {
  switch(action.type) {
    case GAME_CLEAR: {
      return {
        ...state,
        deck: {},
        cards: {
          player: [],
          dealer: []
        }
      };
    }
    case GAME_SET_DECK: {
      return {
        ...state,
        deck: action.payload,
      };
    }
    case GAME_DRAW_PLAYER: {
      return {
        ...state,
        cards: {
          ...state.cards,
          player: [
            ...state.cards.player,
            action.payload
          ]
        }
      };
    }
    case GAME_DRAW_DEALER: {
      return {
        ...state,
        cards: {
          ...state.cards,
          dealer: [
            ...state.cards.dealer,
            action.payload
          ]
        }
      };
    }
    case GAME_SET_PROGRESS: {
      return {
        ...state,
        inProgress: action.payload
      };
    }
    case GAME_SET_SCORE: {
      // cloning
      const score = { ...state.score };
      // mutating
      score[action.payload]++;

      return {
        ...state,
        score: {
          // duplicating
          ...score
        },
        lastWiner: action.payload
      };
    }
    default: {
      //
    }
  }

  return state;
}
