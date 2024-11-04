import Fuse from 'fuse.js'

import { derived } from "svelte/store";
import {isArray, isNullish} from 'remeda'

import { bookList } from "./bookList";
import { keyword } from "./keyword";

// TODO: 백엔드 개발이 완료됨에 따라 제거 및 로직 변경하기
/**
 * 검색 결과 상태
 * 
 * NOTE: bookList(책 리스트)와 keyword(검색어) 상태를 참조하여 검색 결과를 즉시 생성합니다.
 */
export const searchResult = derived([bookList, keyword], ([$bookList, $keyword]) => {
  if (isNullish($bookList)) return;
  if (!isArray($bookList)) return [];
  
  return new Fuse($bookList, {
    keys: ["name", "author"]
  }).search($keyword)
})