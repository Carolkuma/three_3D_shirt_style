import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { SketchPicker } from 'react-color'

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        // presetColors={['#000000', '#ffffff', '#ff0000', '#00ffff']}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker