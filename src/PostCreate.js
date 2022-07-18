import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);