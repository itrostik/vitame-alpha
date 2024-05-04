'use client'

import styles from './styles.module.scss'

import products from '@/widgets/products/model/data'

import transformProducts from '@/widgets/products/utils/transform'

import Section from '@/shared/UI/layouts/section'

import Product from '@/entities/product/UI'
import { Content } from '@/widgets/products/UI/content'

const Products = () => {
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const fetch = async () => {
    //         const { data } = await axios.get(
    //             'https://staging.mobile.vitame.pro/api/v1/catalog_items'
    //         )
    //
    //         setProducts(transformProducts(data))
    //     }
    //
    //     fetch()
    // }, [])

    return (
        <Section id='products' heading='Продукты'>
            <Content limit={6} />
        </Section>
    )
}

export default Products
