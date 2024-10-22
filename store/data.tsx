import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics'
import { splitAtom } from 'jotai/utils'

export const testAtom = atom({
  text:"hello world"
});


export const DataAtom = atom({
    DropList: [
        {name: "drop A"},
        {name: "drop B"},
        {name: "drop C"},
    ]
});

export const DropListAtom = focusAtom(DataAtom, (optic) => optic.prop('DropList'))

export const DropListItemAtoms = splitAtom(DropListAtom)