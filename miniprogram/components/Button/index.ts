Component( {
      options: {
            multipleSlots: true
      },
      properties: {
            type: {
                  type: String,
                  value: 'default'
            } as {
                  type: StringConstructor
                  value:
                  | 'default'
                  | 'primary'
                  | 'border'
                  | 'dashed'
                  | 'warning'
                  | 'success'
                  | 'error'
            },
            size: {
                  type: String,
                  value: 'normal'
            } as {
                  type: StringConstructor
                  value: 'normal' | 'small' | 'large'
            },
            shape: {
                  type: String,
                  value: 'normal'
            } as {
                  type: StringConstructor
                  value: 'normal' | 'circle' | 'rect'
            },
            autoWidth: {
                  type: Boolean,
                  value: false
            },
            width: {
                  type: String,
                  value: ''
            },
            height: {
                  type: String,
                  value: ''
            },
            color: {
                  type: String,
                  value: ''
            },
            bgColor: {
                  type: String,
                  value: ''
            },
            iconPath: {
                  type: String,
                  value: ''
            },
            ghost: Boolean,
            disabled: Boolean,
            loading: Boolean
      }
} )
