import products from '@/widgets/products/model/data'

import React from 'react'
import Good from '@/shared/UI/layouts/good'

export default function Page({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id.toString() === params.id)

    if (!product) {
        return null
    }

    return <Good product={product} />
}
