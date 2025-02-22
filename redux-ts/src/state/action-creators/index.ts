import axios from "axios";
import { Dispatch } from "redux";

import {
  SearchRepositoriesAction,
  SearchRepositoriesErrorAction,
  SearchRepositoriesSuccessAction,
} from "../actions";
import { RepositoriesActionType } from "../action-types";

const searchEndpoint = `https://registry.npmjs.org/-/v1/search`;

export const searchRepositories = (searchTerm: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<SearchRepositoriesAction>({
      type: RepositoriesActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(searchEndpoint, {
        params: {
          text: searchTerm,
        },
      });
      const repositoryNames = data.objects.map(
        (result: any) => result.package.name
      );
      dispatch<SearchRepositoriesSuccessAction>({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositoryNames,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch<SearchRepositoriesErrorAction>({
          type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
