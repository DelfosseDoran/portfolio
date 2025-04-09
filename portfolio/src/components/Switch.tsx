import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default ({
  enabled,
  setEnabled,
}: {
  enabled: boolean
  setEnabled: (value: boolean) => void})=>{

  return (
    <div>
     <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-raisin-black-200 transition data-[checked]:bg-raisin-black-600"
    >
      <span className="w-4 h-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
    </div>
  )
}