import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a fan Simpsons dedicated version of Wordle, based on{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          react-wordle
        </a>
        <br />
        <br />
        <a
          href="https://twitter.com/joeruggieri"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          @joeruggieri
        </a>
      </p>
    </BaseModal>
  )
}
