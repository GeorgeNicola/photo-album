import { PageType } from 'types'

export type AlbumType = {
    _id: string,
    albumId: string,
    albumName: string,
    currentPage: number,
    pages: PageType[],
}
