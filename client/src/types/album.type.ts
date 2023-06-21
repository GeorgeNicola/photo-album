import { PageType } from 'types'

export type AlbumType = {
    albumId: string,
    albumName: string,
    currentPage: number,
    pages: PageType[],
}
