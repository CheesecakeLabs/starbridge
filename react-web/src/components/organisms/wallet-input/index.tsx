import {
  Button,
  ButtonVariant,
  ButtonSize,
  Typography,
  TypographyVariant,
} from 'components/atoms'
import { ICurrencyProps, InputLabel, LabeledInput } from 'components/molecules'
import { IInputProps } from 'components/molecules/labeled-input/type'

import styles from './styles.module.scss'

interface IWalletInputProps extends IInputProps {
  currency: ICurrencyProps
  isSender?: boolean
}

export const WalletInput = ({
  isSender,
  currency,
  onChange,
  name,
  placeholder,
}: IWalletInputProps): JSX.Element => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.content}>
        <Typography
          className={styles.label}
          variant={TypographyVariant.p}
          text={isSender ? 'From:' : 'To:'}
        />
        <Button variant={ButtonVariant.secondary} size={ButtonSize.small}>
          {`Connect ${currency.label} Wallet`}
        </Button>
      </div>
      <LabeledInput
        name={name}
        label={isSender ? InputLabel.sending : InputLabel.receive}
        currency={currency}
        onChange={onChange}
        isSender={isSender}
        disabled={name === InputLabel.receive}
        placeholder={placeholder ?? '--'}
      />
    </div>
  )
}
