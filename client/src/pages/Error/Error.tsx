import { Alignment, Fit, Layout, useRive } from 'rive-react'
import React, { FC } from 'react'

interface ErrorProps {
  errorCode: number
  title: string
}

const Error: FC<ErrorProps> = props => {
  const { setCanvasRef, setContainerRef } = useRive(
    {
      src: 'assets/rive/error.riv',
      artboard: 'main',
      stateMachines: ['State Machine 1'],
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center,
      }),
      autoplay: true,
      useOffscreenRenderer: true,
    },
    {
      shouldResizeCanvasToContainer: true,
      fitCanvasToArtboardHeight: true,
    },
  )
  return (
    <>
      <div className={'block relative w-full h-full'} ref={setContainerRef}>
        <canvas ref={setCanvasRef} className={'w-full h-full'}></canvas>
        <div
          className={
            'absolute bottom-[12vh] left-0 right-0 m-auto text-black flex flex-col'
          }>
          <h1
            className={
              'h1 text-[#ff0000] font-semibold text-center xs:text-[30px] md:text-[36px] lg:text-[40px]'
            }>
            {props.errorCode}
          </h1>
          <h2
            className={
              'h2 text-[#ff0000] font-bold mt-0 md:mt-3 lg:mt-6 text-center xs:text-[20px] md:text-[24px] lg:text-[32px]'
            }>
            {props.title}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Error
