/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VocabularyItem {
  word: string;
  meaning: string;
  unit: string;
  grade: string;
}

export const grades = [
  { id: '7up', name: '七年级上册' },
  { id: '7down', name: '七年级下册' },
  { id: '8up', name: '八年级上册' },
  { id: '8down', name: '八年级下册' },
  { id: '9up', name: '九年级上册' },
  { id: '9down', name: '九年级下册' },
];
