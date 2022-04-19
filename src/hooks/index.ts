import { ref, toRefs } from "vue";


export function useState() {
  const a = ref('stat')


  return {
    a: toRefs(a)
  }
}





























