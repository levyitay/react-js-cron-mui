import React, { useCallback, useMemo } from 'react'
import { Select, MenuItem, FormControl } from '@mui/material'

import { PeriodProps, PeriodType } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export const ALL_PERIODS = [
  'year',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'reboot',
] as PeriodType[]

export default function Period(props: PeriodProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    shortcuts,
    periodsToDisplay = ALL_PERIODS,
    ...selectProps
  } = props

  const options = useMemo(() => {
    const opts = [
      {
        value: 'year',
        label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption,
      },
      {
        value: 'month',
        label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption,
      },
      {
        value: 'week',
        label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption,
      },
      {
        value: 'day',
        label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption,
      },
      {
        value: 'hour',
        label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption,
      },
      {
        value: 'minute',
        label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption,
      },
    ]

    if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
      opts.push({
        value: 'reboot',
        label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption,
      })
    }

    return opts
  }, [
    locale.yearOption,
    locale.monthOption,
    locale.weekOption,
    locale.dayOption,
    locale.hourOption,
    locale.minuteOption,
    locale.rebootOption,
    shortcuts,
  ])

  const selectedPeriodOptions = useMemo(() => {
    return options.filter(
      option => periodsToDisplay.includes(option.value)
    );
  }, [options, periodsToDisplay])

  const handleChange = useCallback(
    (event) => {
      if (!readOnly) {
        setValue(event.target.value)
      }
    },
    [setValue, readOnly]
  )

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-period': true,
        [`${className}-field`]: !!className,
        [`${className}-period`]: !!className,
      }),
    [className]
  )

  const selectClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select': true,
        'react-js-cron-select-no-prefix': locale.prefixPeriod === '',
        [`${className}-select`]: !!className,
      }),
    [className, locale.prefixPeriod]
  )

  // const dropdownClassName = useMemo(
  //   () =>
  //     classNames({
  //       'react-js-cron-select-dropdown': true,
  //       'react-js-cron-select-dropdown-period': true,
  //       [`${className}-select-dropdown`]: !!className,
  //       [`${className}-select-dropdown-period`]: !!className,
  //     }),
  //   [className]
  // )

  return (
    <div className={internalClassName}>
      {locale.prefixPeriod !== '' && (
        <span>{locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod}</span>
      )}

      <FormControl variant="standard">
        <Select
          key={JSON.stringify(locale)}
          defaultValue={value}
          value={value}
          onChange={handleChange}
          className={selectClassName}
          disabled={disabled}
          open={readOnly ? false : undefined}
          {...selectProps}
        >
          {selectedPeriodOptions.map((obj) => (
            <MenuItem key={obj.value} value={obj.value}>
              {obj.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
