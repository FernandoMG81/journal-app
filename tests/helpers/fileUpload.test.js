/* eslint-disable no-undef */
import { ConstructionOutlined } from "@mui/icons-material"
import { fileUpload } from "../../src/helpers"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'de9uossfg',
  api_key: '542376826467294',
  api_secret: 'R5NPSTTCdqTatfD1vGZu9RxAht4',
  secure: true
})

describe('Pruebas en fileUpload', () => { 

  test('debe de subir el archivo correctamente a cloudinary', async() => { 

    const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
    const resp = await fetch( imageUrl )
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')

    const url = await fileUpload( file )
    expect(typeof url).toBe('string')


    const segments = url.split('/')
    const imageId = segments[segments.length -1].replace('.jpg', '')

    const cloudResp = await cloudinary.api.delete_resources('journal/'+ [imageId])

    //console.log(cloudResp)
   })

   test('debe de retornar null', async() => { 
    const file = new File([], 'foto.jpg')
    const url = await fileUpload( file )
    expect( url ).toBe(null)
    })

 })