import type { Member } from "../models/Member";
import * as repo from "../repository/memberRepositoryPrisma";

export function getMemberByName(name: string): Promise<Member[]> {
    return repo.getMemberByName(name);
}
export function getAllMembers(): Promise<Member[]> {
    return repo.getAllMembers();
}

export function getMemberById(id: number): Promise<Member | null> {
    return repo.getMemberById(id);
}