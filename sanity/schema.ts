import { type SchemaTypeDefinition } from 'sanity'
import {post} from "@/sanity/schemas/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
