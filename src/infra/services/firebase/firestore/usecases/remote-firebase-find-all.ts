import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { IFirebase, IFirebaseFindAll } from '@/infra/services/firebase'
import { CollectionsType } from '@/infra/services/firebase/collections'

interface RemoteFirebaseFindAllDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteFirebaseAll<R> implements IFirebaseFindAll<R> {
  public data: Array<R> | null
  private database: IFirebase
  private collection: CollectionsType

  constructor(
    protected readonly dependencies: RemoteFirebaseFindAllDependencies,
  ) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.data = null
  }

  async findAll(): Promise<R> {
    const docRef = query(
      this.database.collection(this.collection),
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )

    const querySnapshot = await getDocs(docRef)

    querySnapshot.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as R

      if (this.data) {
        this.data.push(data)
      }
    })

    return this.data as R
  }
}