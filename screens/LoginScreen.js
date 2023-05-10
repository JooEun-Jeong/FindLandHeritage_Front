// import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
// import React from 'react'
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

// const auth = getAuth();

// const LoginScreen = () => {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleLogin = async () => {

//   }
//   const handleSignUp = async () => {
//     try{
//       // 비동기로 처리하기 위함
//       const user = await createUserWithEmailAndPassword(
//         auth, 
//         email, 
//         password
//       );
//       console.log(user);
//     } catch(error){
//       console.log(error.message);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity 
//           onPress={handleLogin}  
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>로그인</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           onPress={handleSignUp}
//           style={[styles.button, styles.buttonOutline]}
//         >
//           <Text style={styles.buttonOutlineText}>회원가입</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     width: '80%',
//     marginTop: 15
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width:'50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   button: {
//     backgroundColor: 'black',
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// })