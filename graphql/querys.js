import gql from "graphql-tag"

export const categorias = gql`
  query {
    categories {
      id
      name
      icono
      slug
      img
    }
  }
  `
export const category = gql`
query ($id: ID!) {
  category(id: $id) {
    description
  }
}
`