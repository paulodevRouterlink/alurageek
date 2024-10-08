import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { COLLECTION, IFirebase } from '@/infra/services/firebase'
import { ICategoryList } from '@/data/usecases'

interface RemoteCategoryListDependencies {
  database: IFirebase
}

export class RemoteCategoryList implements ICategoryList {
  private categories: ICategoryList.Model[]
  private database: IFirebase

  constructor(protected dependencies: RemoteCategoryListDependencies) {
    this.database = dependencies.database
    this.categories = []
  }

  async getCategoryList(): Promise<RemoteCategoryList.Model[]> {
    const categoriesQuery = query(
      this.database.collection(COLLECTION.categories),
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )
    const productListQuery = await getDocs(categoriesQuery)

    productListQuery.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as RemoteCategoryList.Model
      this.categories.push(data)
    })

    return this.categories
  }
}

export namespace RemoteCategoryList {
  export type Model = ICategoryList.Model
}
