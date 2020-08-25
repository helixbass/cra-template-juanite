import {CurriedUnchangedProps} from 'ad-hok'

type TapType = <TProps>(
  callback: (props: TProps) => void,
) => CurriedUnchangedProps<TProps>

export const tap: TapType = (callback) => (props) => {
  callback(props)

  return props
}

type LogType = <TProps>(key: string) => CurriedUnchangedProps<TProps>

export const log: LogType = (key) => tap((props) => console.log({[key]: props}))
