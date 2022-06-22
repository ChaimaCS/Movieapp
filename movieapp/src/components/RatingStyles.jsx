import rating from '../App';
  
export const Container = rating.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 60vh;
   font-size: 60px;
`
export const Radio = rating.input`
   display: none;
`
export const Rating = rating.div`
   cursor: pointer;
`