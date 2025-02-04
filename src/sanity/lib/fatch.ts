import { createClient } from "next-sanity";

const client = createClient({
    projectId : "7l63bibn",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10",
    token: "sk6cxo0GngRCIKsjeX9xtSOMwteK0j7nygoe2FZXtA8eSEXpj2vh61yMxRzQZ8QafZlt2NIek2wQxlcaNjnnXsl8scPxZQvKTfEQE1tPkRuOEgeG8TFWKyiUqYSK5sASvVdMuFemASslhNCSieAAdPDB9h4uRCW8G7YSqxzsLNeZz6bapYas"
})

export async function sanityFetch({query, params = {}}: {query : string ,params?: any}){
    return await client.fetch(query, params)
}
    
