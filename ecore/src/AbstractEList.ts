// *****************************************************************************
//
// This file is part of a MASA library or program.
// Refer to the included end-user license agreement for restrictions.
//
// Copyright (c) 2020 MASA Group
//
// *****************************************************************************

import { EList } from "./EList";
import { Collection } from "./Collection";
import { ImmutableEList } from "./ImmutableEList";

export abstract class AbstractEList<E> implements EList<E> {
    private _isUnique: boolean;

    constructor(isUnique: boolean = false) {
        this._isUnique = isUnique;
    }

    add(e: E): boolean {
        if (this._isUnique && this.contains(e)) {
            return false;
        }
        this.doAdd(e);
        return true;
    }

    addAll(c: Collection<E>): boolean {
        if (this._isUnique) {
            c = this.getNonDuplicates(c);
            if (c.isEmpty()) return false;
        }
        this.doAddAll(c);
        return true;
    }

    insert(index: number, e: E): boolean {
        if (index < 0 || index > this.size())
            throw new RangeError("Index out of bounds: index=" + index + " size=" + this.size());
        if (this._isUnique && this.contains(e)) return false;
        this.doInsert(index, e);
        return true;
    }

    insertAll(index: number, c: Collection<E>): boolean {
        if (index < 0 || index > this.size())
            throw new RangeError("Index out of bounds: index=" + index + " size=" + this.size());
        if (this._isUnique) {
            c = this.getNonDuplicates(c);
            if (c.isEmpty()) return false;
        }
        this.doInsertAll(index, c);
        return true;
    }

    remove(e: E): boolean {
        let index = this.indexOf(e);
        if (index == -1) return false;
        this.removeAt(index);
        return true;
    }

    abstract removeAt(index: number): E;

    removeAll(c: Collection<E>): boolean {
        let modified = false;
        for (let i = this.size(); --i >= 0; ) {
            if (c.contains(this.doGet(i))) {
                this.removeAt(i);
                modified = true;
            }
        }
        return modified;
    }

    retainAll(c: Collection<E>): boolean {
        let modified = false;
        for (let i = this.size(); --i >= 0; ) {
            if (!c.contains(this.doGet(i))) {
                this.removeAt(i);
                modified = true;
            }
        }
        return modified;
    }

    get(index: number): E {
        if (index < 0 || index >= this.size())
            throw new RangeError("Index out of bounds: index=" + index + " size=" + this.size());
        return this.doGet(index);
    }

    set(index: number, e: E): E {
        if (index < 0 || index >= this.size())
            throw new RangeError("Index out of bounds: index=" + index + " size=" + this.size());
        if (this._isUnique) {
            let currIndex = this.indexOf(e);
            if (currIndex >= 0 && currIndex != index)
                throw new Error("element already in list : uniqueness constraint is not respected");
        }
        return this.doSet(index, e);
    }

    indexOf(e: E): number {
        let index = 0;
        for (const element of this) {
            if (element == e) return index;
            else index++;
        }
        return -1;
    }

    move(to: number, e: E): void {
        this.moveTo(to, this.indexOf(e));
    }

    abstract moveTo(to: number, from: number): E;

    clear(): void {
        for (let i = this.size() - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    }

    contains(e: E): boolean {
        return this.indexOf(e) != -1;
    }

    isEmpty(): boolean {
        return this.size() == 0;
    }

    abstract size(): number;

    abstract toArray(): E[];

    [Symbol.iterator](): Iterator<E> {
        return new (class implements Iterator<E> {
            private _cursor: number;
            private _list: AbstractEList<E>;
            constructor(list: AbstractEList<E>) {
                this._cursor = 0;
                this._list = list;
            }

            next(value?: any): IteratorResult<E> {
                return this._cursor++ < this._list.size()
                    ? { value: this._list.get(this._cursor - 1), done: false }
                    : { value: undefined, done: true };
            }
        })(this);
    }

    private getNonDuplicates(c: Collection<E>): Collection<E> {
        let s = new Set<E>(c);
        for (const e of this) {
            s.delete(e);
        }
        return new ImmutableEList<E>([...s]);
    }

    protected abstract doGet(index: number): E;

    protected abstract doAdd(e: E): void;

    protected abstract doAddAll(c: Collection<E>): boolean;

    protected abstract doInsert(index: number, e: E): void;

    protected abstract doInsertAll(index: number, c: Collection<E>): boolean;

    protected abstract doSet(index: number, e: E): E;

    protected didAdd(index: number, e: E): void {
        // NOTHING
    }

    protected didRemove(index: number, e: E): void {
        // NOTHING
    }

    protected didClear(elements: E[]): void {
        if (elements != null) {
            for (let i = 0; i < elements.length; ++i) {
                this.didRemove(i, elements[i]);
            }
        }
    }

    protected didMove(from: number, index: number, e: E): void {
        // NOTHING
    }

    protected didSet(index: number, newE: E, oldE: E): void {
        // NOTHING
    }
    protected didChange(): void {
        // NOTHING
    }
}
