import {useEffect,useState} from 'react';
export function useStored<T>(key:string,initial:T){const [value,setValue]=useState<T>(()=>{try{const raw=localStorage.getItem('sipo:'+key);return raw?JSON.parse(raw):initial}catch{return initial}});useEffect(()=>{try{localStorage.setItem('sipo:'+key,JSON.stringify(value))}catch{}},[key,value]);return [value,setValue] as const;}
export type Drink={name:string;abv:number;sugar:number;calories:number;image:string;time:string};
