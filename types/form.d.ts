export interface FormField {
    type: 'text' | 'password' | 'role' | 'building' | 'user' | 'status',
    label: string,
    initialValue: string,
    key: string
}

export interface Form {
    apiEndpoint: string,
    label: string,
    fields?: FormField[]
}