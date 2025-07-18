import { Dispatch, SetStateAction } from 'react'
import {ButtonProps,SelectProps} from '@material-ui/core'
// External props

export interface CronProps {
  /**
   * Cron value, the component is by design a controled component.
   * The first value will be the default value.
   *
   * required
   */
  value: string

  /**
   * Set the cron value, similar to onChange.
   * The naming tells you that you have to set the value by yourself.
   *
   * required
   */
  setValue: SetValue

  /**
   * Set the container className and used as a prefix for other selectors.
   * Available selectors: https://xrutayisire.github.io/react-js-cron/?path=/story/reactjs-cron--custom-style
   */
  className?: string

  /**
   * Humanize the labels in the cron component, SUN-SAT and JAN-DEC.
   *
   * Default: true
   */
  humanizeLabels?: boolean

  /**
   * Humanize the value, SUN-SAT and JAN-DEC.
   *
   * Default: false
   */
  humanizeValue?: boolean

  /**
   * Controls whether to use cron intervals syntax.
   *
   * Example: When set to true, a cron expression like '0 8 * * 1,3,5' ("At 08:00 AM, only on Monday, Wednesday, and Friday")
   * would be changed to '0 8 * * 1-5/2' ("At 08:00 AM, every 2 days of the week, Monday through Friday")
   *
   * Default: true
   */
  useCronIntervals?: boolean

  /**
   * Add a "0" before numbers lower than 10.
   *
   * Default: false
   */
  leadingZero?: LeadingZero

  /**
   * Define the default period when the default value is empty.
   *
   * Default: 'day'
   */
  defaultPeriod?: PeriodType

  /**
   * Define the options of periods that will be displayed.
   *
   * Example: If you only want the option to generate cron expressions to
   * represent a time in the day you can define periodsToDisplay={['day']}.
   * The other options won't be available in the period select component.
   *
   * Default: ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot']
   *
   * OBS: 'reboot' option will apply only when '@reboot' is listed in shortcuts list.
   */
  periodsToDisplay?: PeriodType[]

  /**
   * Define which fields can select multiple values.
   *
   * Example: If you don't want to allow multiple hours or minutes to be selected,
   * you can define allowMultipleSelectFor={['months', 'month-days', 'week-days']}.
   * This way only months, month days and week days select components will be allowed
   * to have multiple values in the cron expression.
   *
   * Default: ['months', 'month-days', 'week-days', 'hours', 'minutes']
   */
  allowMultipleSelectFor?: Omit<CronType, 'period'>[]

  /**
   * Disable the cron component.
   *
   * Default: false
   */
  disabled?: boolean

  /**
   * Make the cron component read-only.
   *
   * Default: false
   */
  readOnly?: boolean

  /**
   * Define if empty should trigger an error.
   *
   * Default: 'for-default-value'
   */
  allowEmpty?: AllowEmpty

  /**
   * Support cron shortcuts.
   *
   * Default: ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly']
   */
  shortcuts?: Shortcuts

  /**
   * Define the clock format.
   */
  clockFormat?: ClockFormat

  /**
   * Display the clear button.
   *
   * Default: true
   */
  clearButton?: boolean


  clearButtonProps?: ClearButtonProps

  /**
   * Define the clear button action.
   *
   * Default: 'fill-with-every'
   */
  clearButtonAction?: ClearButtonAction

  /**
   * Display error style (red border and background).
   *
   * Display: true
   */
  displayError?: boolean

  /**
   * Triggered when the cron component detects an error with the value.
   */
  onError?: OnError

  /**
   * Change the component language.
   * Can also be used to remove prefix and suffix.
   *
   * When setting 'humanizeLabels' you can change the language of the
   * alternative labels with 'altWeekDays' and 'altMonths'.
   *
   * The order of the 'locale' properties 'weekDays', 'months', 'altMonths'
   * and 'altWeekDays' is important! The index will be used as value.
   *
   * Default './locale.ts'
   */
  locale?: Locale
}
export interface Locale {
  everyText?: string
  emptyMonths?: string
  emptyMonthDays?: string
  emptyMonthDaysShort?: string
  emptyWeekDays?: string
  emptyWeekDaysShort?: string
  emptyHours?: string
  emptyMinutes?: string
  emptyMinutesForHourPeriod?: string
  yearOption?: string
  monthOption?: string
  weekOption?: string
  dayOption?: string
  hourOption?: string
  minuteOption?: string
  rebootOption?: string
  prefixPeriod?: string
  prefixMonths?: string
  prefixMonthDays?: string
  prefixWeekDays?: string
  prefixWeekDaysForMonthAndYearPeriod?: string
  prefixHours?: string
  prefixMinutes?: string
  prefixMinutesForHourPeriod?: string
  suffixMinutesForHourPeriod?: string
  errorInvalidCron?: string
  clearButtonText?: string
  weekDays?: string[]
  months?: string[]
  altWeekDays?: string[]
  altMonths?: string[]
}
export type SetValueFunction = (value: string) => void
export type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>
export type CronError =
  | {
      type: 'invalid_cron'
      description: string
    }
  | undefined
export type OnErrorFunction = (error: CronError) => void
export type OnError =
  | OnErrorFunction
  | Dispatch<SetStateAction<CronError>>
  | undefined
export interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {}
export type ClearButtonAction = 'empty' | 'fill-with-every' | string
export type PeriodType =
  | 'year'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'reboot'
  | string
export type AllowEmpty = 'always' | 'never' | 'for-default-value' | string
export type CronType =
  | 'period'
  | 'months'
  | 'month-days'
  | 'week-days'
  | 'hours'
  | 'minutes'
  | string
export type LeadingZeroType = 'month-days' | 'hours' | 'minutes' | string
export type LeadingZero = boolean | LeadingZeroType[]
export type ClockFormat = '24-hour-clock' | '12-hour-clock' | string
export type ShortcutsType =
  | '@yearly'
  | '@annually'
  | '@monthly'
  | '@weekly'
  | '@daily'
  | '@midnight'
  | '@hourly'
  | '@reboot'
export type Shortcuts = boolean | ShortcutsType[]

// Internal props

export interface FieldProps {
  value?: number[]
  setValue: SetValueNumbersOrUndefined
  locale: Locale
  className?: string
  disabled: boolean
  readOnly: boolean
  useCronIntervals: boolean
  period: PeriodType
  multiple: boolean
}
export interface PeriodProps
  extends Omit<FieldProps, 'value' | 'setValue' | 'period' | 'useCronIntervals' | 'multiple'> {
  value: PeriodType
  setValue: SetValuePeriod
  shortcuts: Shortcuts
  periodsToDisplay?: PeriodType[]
}
export interface MonthsProps extends FieldProps {
  humanizeLabels: boolean
}
export interface MonthDaysProps extends FieldProps {
  weekDays?: number[]
  leadingZero: LeadingZero
}
export interface WeekDaysProps extends FieldProps {
  humanizeLabels: boolean
  monthDays?: number[]
}
export interface HoursProps extends FieldProps {
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface MinutesProps extends FieldProps {
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface CustomSelectProps
  extends Omit<
    SelectProps,
    | 'mode'
    | 'tokenSeparators'
    | 'allowClear'
    | 'virtual'
    | 'onClick'
    | 'onBlur'
    | 'tagRender'
    | 'dropdownRender'
    | 'showSearch'
    | 'showArrow'
    | 'onChange'
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'onSelect'
    | 'onDeselect'
  > {
  grid?: boolean
  setValue: SetValueNumbersOrUndefined
  optionsList?: string[]
  locale: Locale
  value?: number[]
  humanizeLabels?: boolean
  useCronIntervals?: boolean
  disabled: boolean
  readOnly: boolean
  leadingZero?: LeadingZero
  clockFormat?: ClockFormat
  period: PeriodType
  unit: Unit
}
export type SetValueNumbersOrUndefined = Dispatch<
  SetStateAction<number[] | undefined>
>
export type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>
export type SetInternalError = Dispatch<SetStateAction<boolean>>
export interface DefaultLocale {
  everyText: string
  emptyMonths: string
  emptyMonthDays: string
  emptyMonthDaysShort: string
  emptyWeekDays: string
  emptyWeekDaysShort: string
  emptyHours: string
  emptyMinutes: string
  emptyMinutesForHourPeriod: string
  yearOption: string
  monthOption: string
  weekOption: string
  dayOption: string
  hourOption: string
  minuteOption: string
  rebootOption: string
  prefixPeriod: string
  prefixMonths: string
  prefixMonthDays: string
  prefixWeekDays: string
  prefixWeekDaysForMonthAndYearPeriod: string
  prefixHours: string
  prefixMinutes: string
  prefixMinutesForHourPeriod: string
  suffixMinutesForHourPeriod: string
  errorInvalidCron: string
  clearButtonText: string
  weekDays: string[]
  months: string[]
  altWeekDays: string[]
  altMonths: string[]
}
export type CronValues = { [key in CronType]: number[] | string | undefined }
export interface Classes {
  [key: string]: boolean
}
export interface ShortcutsValues {
  name: ShortcutsType
  value: string
}
export interface Unit {
  type: CronType
  min: number
  max: number
  total: number
  alt?: string[]
}
export interface Clicks {
  time: number
  value: number
}
