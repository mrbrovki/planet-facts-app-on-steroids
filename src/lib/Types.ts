import { Dispatch } from 'react';

interface ContentAndSource{
  content: string;
  source: string;
};

interface PlanetImages{
 planet: string;
 internal: string;
 geology: string;
};

export interface PlanetProps{
 id: number;
 overview: ContentAndSource;
 structure: ContentAndSource;
 geology: ContentAndSource;
 rotation: string;
 revolution: string;
 radius: string;
 temperature: string;
 images: PlanetImages;
};

export interface State {

};

type Action = 
| {type: '', payload: ''}

export interface ContextProps{
 state: State;
 dispatch: Dispatch<Action>;
};

export type ReducerFn<T> = (state: T, action: Action) => T;