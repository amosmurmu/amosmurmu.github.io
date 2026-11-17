export const PET_SAY_EVENT = 'pet:say'

export interface PetSayDetail {
  text: string
  duration?: number
}

export function petSay(text: string, options: Omit<PetSayDetail, 'text'> = {}) {
  window.dispatchEvent(
    new CustomEvent<PetSayDetail>(PET_SAY_EVENT, {
      detail: { text, ...options },
    })
  )
}
