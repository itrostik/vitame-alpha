'use client'

import styles from '@/widgets/products/UI/styles.module.scss'
import products from '@/widgets/products/model/data'
import Product from '@/entities/product/UI'
import { useRouter } from 'next/navigation'

export const Content = ({ limit = 100 }: { limit?: number }) => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {products.slice(0, limit).map((product, index) => {
                    return <Product key={index} product={product} />
                })}
            </div>
            <button className={styles.button} onClick={() => router.push('/products')}>
                Все продукты
            </button>
        </div>
    )
}
