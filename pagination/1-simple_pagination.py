#!/usr/bin/env python3
"""Module that implements get_page method"""


import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function that returns a tuple with start and end indices"""

    prev = page - 1
    start = prev * page_size
    end = start + page_size

    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Gets relavent data"""

        assert isinstance(page, int) and page > 0, "Page should be int and > 0"
        assert isinstance(page_size, int) and page_size > 0

        (start, end) = index_range(page, page_size)

        return self.dataset()[start:end]
