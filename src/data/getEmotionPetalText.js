import emotionFlowerPetals from '../data/emotionFlower'

const getEmotionPetalText = (id, translate) => emotionFlowerPetals[id]
    .map(translate)
    .join(', ')

export default getEmotionPetalText