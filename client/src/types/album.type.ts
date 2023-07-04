import { PageType } from 'types'

export type AlbumType = {
    _id: any,
    albumId: string,
    albumName: string,
    currentPage: number,
    pages: PageType[],
}
