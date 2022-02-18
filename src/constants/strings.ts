export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Welgedaan', 'Mooi so', 'Jy het reg geraai!']
export const GAME_COPIED_MESSAGE = 'Gekopieer'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Jy het nie genoeg letters ingesleutel nie'
export const WORD_NOT_FOUND_MESSAGE = 'Die woord wat jy ingesleutel het is nie op die lys nie'
export const HARD_MODE_ALERT_MESSAGE =
  'Die moeilikheidsgraad kan slegs verander voor jou eerste raaiskoot.'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Die regte woord was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Jy moet die letter ${guess} in ${position} gebruik`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Jou raaiskoot moet die letter ${letter} bevat`
export const ENTER_TEXT = 'Voer in'
export const DELETE_TEXT = 'Vee uit'
export const STATISTICS_TITLE = 'Statistiek'
export const GUESS_DISTRIBUTION_TEXT = 'Raaiskote'
export const NEW_WORD_TEXT = 'Jy kan weer speel oor'
export const SHARE_TEXT = 'Deel'
export const TOTAL_TRIES_TEXT = 'Totale probeerslae'
export const SUCCESS_RATE_TEXT = 'Sukseskoers'
export const CURRENT_STREAK_TEXT = 'Opeenvolgende dae reg geraai'
export const BEST_STREAK_TEXT = 'Meeste opeenvolgende dae reg geraai'
