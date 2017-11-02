export const addTodo = (text: string) => {
  return {type: 'ADD_TODO', payload: text}
}
export const fetchMovie = () => {
  return {type: 'FETCH_MOVIE_BEGIN'}
}
export const fetchPic = () => {
  return {type: 'FETCH_PIC_BEGIN'}
}
