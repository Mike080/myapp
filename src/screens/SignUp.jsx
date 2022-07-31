import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { register } from '../redux/authSlice'

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const dispatch = useDispatch()

  const onSubmit = async data => {
    dispatch(register(data))
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="password"
            onBlur={onBlur}
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <Button onPress={handleSubmit(onSubmit)} title="Register" />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#ccc'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40
  }
})
