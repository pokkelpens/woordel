import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Hoe om te speel" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Raai die woord in 6 probeerslae. Na elke raaksoot sal die kleur van die blokkie verander om te wys hoe akkuraat jou raaiskoot was.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" status="correct" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Die letter P kom voor in die woord en is op die regte plek.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="E" />
        <Cell value="S" status="present" />
        <Cell value="E" />
        <Cell value="M" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Die letter S kom voor in die woord, maar is nie op die regte plek nie.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="K" />
        <Cell value="R" />
        <Cell value="A" status="absent" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Die letter A kom glad nie voor in die woord nie. 
      </p>
    </BaseModal>
  )
}

