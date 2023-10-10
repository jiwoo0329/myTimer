import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// RootState 및 AppDispatch type을 import하는 대신
// useDispatch 및 useSelector hooks의 typed versions을 생성 함.