#!/usr/bin/env python3
"""Module that returns start and end index"""

import typing


def index_range(page: int, page_size: int) -> typing.Tuple[int, int]:
    """Function that returns a tuple with start and end indices"""

    prev = page - 1
    start = prev * page_size
    end = start + page_size

    return (start, end)
