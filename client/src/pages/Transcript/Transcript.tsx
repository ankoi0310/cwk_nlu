import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getCurrentToken } from 'redux/store/features/authSlice'
import { getTranscript } from 'redux/store/features/transcriptSlice'
import styles from './Transcript.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface TranscriptProps {}

const Transcript: FC<TranscriptProps> = () => {
  const token = useAppSelector(getCurrentToken)
  const { loading, error, transcript } = useAppSelector(state => state.transcript)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('Đã render')
    const controller = new AbortController()
    const signal = controller.signal

    const loadScore = () => {
      dispatch(getTranscript({ token, signal }))
    }

    loadScore()

    return () => {
      console.log('Đã hủy')
      controller.abort()
    }
  }, [])

  return <div className={cx('')}>Score Component</div>
}

export default Transcript
